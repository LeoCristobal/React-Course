#include <SoftwareSerial.h>
#include <DHT.h>

// ================= PHONE NUMBERS =================
const String PHONE_1 = "ENTER_PHONE_NUMBER_HERE";
const String PHONE_2 = ""; // optional
const String PHONE_3 = ""; // optional
// you can add another here if you have many phone number

// ================= SIM800L =================
#define rxPin 2
#define txPin 3
SoftwareSerial sim800L(rxPin, txPin);

// ================= PINS =================
#define flame_sensor_pin 5
#define buzzer_pin 4
#define smoke_pin A0

#define DHTPIN 6
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

// ================= VARIABLES =================
boolean fire_flag = 0;

void setup()
{
  Serial.begin(115200);
  sim800L.begin(9600);

  pinMode(flame_sensor_pin, INPUT);
  pinMode(buzzer_pin, OUTPUT);
  digitalWrite(buzzer_pin, LOW);

  dht.begin();

  Serial.println("Initializing SIM800L...");
  sim800L.println("AT");
  delay(1000);
}

void loop()
{
  // Read sensors
  int flame_value = digitalRead(flame_sensor_pin); // LOW = fire
  int smoke_value = analogRead(smoke_pin);         // higher = more smoke
  float temperature = dht.readTemperature();       // in °C

  Serial.print(" | Flame: "); Serial.print(flame_value);
  Serial.print(" | Smoke: "); Serial.print(smoke_value);
  Serial.print(" | Temp: "); Serial.println(temperature);

  // CONDITIONS
  bool flameDetected = (flame_value == LOW);
  bool smokeDetected = (smoke_value > 400);   // adjust threshold if needed
  bool highTemp = (temperature > 50);

  if (flameDetected || smokeDetected || highTemp)
  {
    digitalWrite(buzzer_pin, HIGH);

    if (fire_flag == 0)
    {
      fire_flag = 1;
      Serial.println("🔥 FIRE CONDITION DETECTED! CALLING...");
      make_multi_call();
    }
  }
  else
  {
    digitalWrite(buzzer_pin, LOW);
    fire_flag = 0;
  }

  delay(1000);
}

// ================= CALL FUNCTIONS =================
void make_multi_call()
{
  if (PHONE_1 != "") make_call(PHONE_1);
  if (PHONE_2 != "") make_call(PHONE_2);
  if (PHONE_3 != "") make_call(PHONE_3);
}

void make_call(String phone)
{
  Serial.println("Calling " + phone);
  sim800L.println("ATD" + phone + ";");
  delay(20000);  // ring for 20 seconds
  sim800L.println("ATH");
  delay(2000);
}