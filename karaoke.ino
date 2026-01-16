#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);

#define buzzer 5

int melody[] = {
  784, 659, 698, 784, 659, 698, 784, 0,
  659, 523, 587, 659, 523, 587, 659, 523, 587, 659, 587, 523,
  440, 440, 0, 440, 440, 392, 440, 392, 392, 0, 392,
  440, 440, 440, 440, 523, 494,
  784, 659, 698, 784, 659, 698, 784,
  659, 523, 587, 659, 523, 587, 659, 523, 587, 659, 587, 523,
  440, 440, 0, 440, 440, 392, 440, 392, 392, 0, 392, 392,
  440, 440, 440, 0, 440, 523, 494, 494, 494, 494, 523, 0,
  0
};

int durations[] = {
  4,8,8,4,8,8,2,2,
  4,8,8,4,8,8,4,8,8,4,8,8,
  4,8,8,4,8,8,8,8,2,8,8,
  8,8,4,4,4,1,
  4,8,8,4,8,8,1,
  4,8,8,4,8,8,4,8,8,4,8,8,
  4,8,8,4,8,8,8,8,4,4,8,8,
  8,8,8,8,4,4,8,8,4,4,8,8,
  1
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
    lcd.print("Here's to the");
    lcd.setCursor(0, 1);
    lcd.print("ones that we got");
    break;

  case 7:
    lcd.clear();
    lcd.print("Cheers to the");
    lcd.setCursor(0, 1);
    lcd.print("wish you were");
    break;

  case 13:
    lcd.clear();
    lcd.print("here, but you're");
    lcd.setCursor(0, 1);
    lcd.print("not");
    break;

  case 17:
    lcd.clear();
    lcd.print("'Cause the");
    lcd.setCursor(0, 1);
    lcd.print("drinks bring");
    break;

  case 21:
    lcd.clear();
    lcd.print("back all the");
    lcd.setCursor(0, 1);
    lcd.print("memories");
    break;

  case 27:
    lcd.clear();
    lcd.print("Of everything");
    lcd.setCursor(0, 1);
    lcd.print("we've been through");
    break;

  case 34:
    lcd.clear();
    lcd.print("Toast to the");
    lcd.setCursor(0, 1);
    lcd.print("ones here today");
    break;

  case 41:
    lcd.clear();
    lcd.print("Toast to the");
    lcd.setCursor(0, 1);
    lcd.print("ones we lost");
    break;

  case 51:
    lcd.clear();
    lcd.print("'Cause the drinks");
    lcd.setCursor(0, 1);
    lcd.print("bring back");
    break;

  case 55:
    lcd.clear();
    lcd.print("all the memories");
    break;

  case 61:
    lcd.clear();
    lcd.print("Memories bring");
    lcd.setCursor(0, 1);
    lcd.print("back you");
    break;
}


    delay(duration * 1.3);
    digitalWrite(leds[thisNote % 3], LOW);
    noTone(buzzer);
  }
}
