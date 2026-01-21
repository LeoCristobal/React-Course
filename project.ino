#include <SoftwareSerial.h>
#include <OneWire.h>
#include <DallasTemperature.h>

// ================= PHONE NUMBERS =================
const String PHONE_1 = "+63912345678"; // Sample Number
const String PHONE_2 = "";             // optional
const String PHONE_3 = "";             // optional

// ================= SIM800L =================
#define rxPin 2
#define txPin 3
SoftwareSerial sim800L(rxPin, txPin);

// ================= PINS =================
#define flame_sensor_pin 5
#define buzzer_pin 4
#define smoke_pin A0
#define ONE_WIRE_BUS 6   // DS18B20 data pin

// ================= SENSORS =================
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

// ================= VARIABLES =================
boolean fire_flag = 0;

void setup() {
  Serial.begin(115200);
  sim800L.begin(9600);

  pinMode(flame_sensor_pin, INPUT);
  pinMode(buzzer_pin, OUTPUT);

  Serial.println("Initializing SIM800L...");
  sim800L.println("AT+CREG?");
  delay(1000);

  sensors.begin(); // DS18B20 init
}

void loop() {
  int flame_value = digitalRead(flame_sensor_pin);
  int smoke_value = analogRead(smoke_pin);

  sensors.requestTemperatures();
  float temperature = sensors.getTempCByIndex(0);

  Serial.print("Flame: "); Serial.print(flame_value);
  Serial.print(" | Smoke: "); Serial.print(smoke_value);
  Serial.print(" | Temp: "); Serial.println(temperature);

  bool flameDetected = (flame_value == LOW);
  bool smokeDetected = (smoke_value > 400);
  bool highTemp = (temperature > 50);

  if (flameDetected || smokeDetected || highTemp) {
    digitalWrite(buzzer_pin, HIGH);

    if (!fire_flag) {
      fire_flag = 1;
      Serial.println("🔥 FIRE DETECTED! CALLING...");
      make_multi_call();
    }
  } else {
    digitalWrite(buzzer_pin, LOW);
    fire_flag = 0;
  }

  delay(1000);
}

// ================= CALL FUNCTIONS =================
void make_multi_call() {
  if (PHONE_1 != "") make_call(PHONE_1);
  if (PHONE_2 != "") make_call(PHONE_2);
  if (PHONE_3 != "") make_call(PHONE_3);
}

void make_call(String phone) {
  Serial.println("Calling " + phone);
  sim800L.println("ATD" + phone + ";");
  delay(20000);
  sim800L.println("ATH");
  delay(2000);
}