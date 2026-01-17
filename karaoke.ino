#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);

#define buzzer 5

int melody[] = {
  392, 392, 349, 330, 294,
  294, 294, 330, 349, 330,
  262, 262, 294, 330, 294, 262, 247, 220, 196,

  392, 392, 349, 330, 294,
  294, 294, 330, 349, 330,
  262, 294, 330, 349, 330, 294, 262, 247, 262,
  0,
};

int durations[] = {
  4, 4, 4, 4, 1,
  4, 4, 4, 4, 1,
  4, 2, 2, 2, 2, 2, 4, 4, 1,

  4, 4, 4, 4, 1,
  4, 4, 4, 4, 1,
  4, 2, 2, 2, 2, 2, 4, 4, 2,
  2,
};

int leds[] = {2, 3, 4};

void setup() {
  lcd.init();
  lcd.backlight();

  for (int i = 0; i < 3; i++) {
    pinMode(leds[i], OUTPUT);
  }
  pinMode(buzzer, OUTPUT);
}

void loop() {
  int size = sizeof(melody) / sizeof(int);

  for (int thisNote = 0; thisNote < size; thisNote++) {
    int duration = 1000 / durations[thisNote];

    tone(buzzer, melody[thisNote], duration);
    digitalWrite(leds[thisNote % 3], HIGH);

    switch (thisNote) {

  case 0:
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Wherever you go,");
    lcd.setCursor(0, 1);
    lcd.print("whatever you do");
    break;

  case 10:
    lcd.clear();
    lcd.print("I will be right");
    lcd.setCursor(0, 1);
    lcd.print("here waiting");
    break;

  case 17:
    lcd.clear();
    lcd.print("for you");
    lcd.setCursor(0, 1);
    lcd.print(" ");
    break;

  case 19:
    lcd.clear();
    lcd.print("Whatever it");
    lcd.setCursor(0, 1);
    lcd.print("takes or how my");
    break;

  case 27:
    lcd.clear();
    lcd.print("heart breaks");
    lcd.setCursor(0, 1);
    lcd.print(" ");
    break;

  case 29:
    lcd.clear();
    lcd.print("I will be right");
    lcd.setCursor(0, 1);
    lcd.print("here waiting");
    break;

  case 36:
    lcd.clear();
    lcd.print("for you");
    lcd.setCursor(0, 1);
    lcd.print(" ");
    break;
}
    delay(duration * 1.3);
    digitalWrite(leds[thisNote % 3], LOW);
    noTone(buzzer);
  }
}
