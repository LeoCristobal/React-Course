#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);

#define buzzer 5

int melody[] = {

  0,

  392, 440, 523, 440, 659, 659, 0,
  587, 0,

  392, 440, 523, 440, 587, 587, 0,
  523, 0, 494, 440, 0,

  392, 440, 523, 440, 523, 587, 0,
  494, 440, 392, 0, 392, 0, 587, 0, 523, 0,

  392, 440, 523, 440, 659, 659, 0,
  587, 0,

  392, 440, 523, 440, 784, 494, 0,
  523, 0, 494, 440, 0,

  392, 440, 523, 440, 523, 587, 0,
  494, 440, 392, 0, 392, 0, 587, 0, 523, 0,

  523, 0, 587, 0, 392, 0, 587, 0, 659, 0,
  784, 740, 659, 0,

  523, 0, 587, 0, 392, 0
};

int durations[] = {

   2,

  8, 8, 8, 8, 2, 8, 8,
  2, 8,

  8, 8, 8, 8, 2, 8, 8,
  4, 8, 8, 8, 8,

  8, 8, 8, 8, 2, 8, 8,
  2, 8, 4, 8, 8, 8, 8, 8, 1, 4,

  8, 8, 8, 8, 2, 8, 8,
  2, 8,

  8, 8, 8, 8, 2, 8, 8,
  2, 8, 8, 8, 8,

  8, 8, 8, 8, 2, 8, 8,
  4, 8, 3, 8, 8, 8, 8, 8, 1, 4,

  2, 6, 2, 6, 4, 4, 2, 6, 2, 3,
  8, 8, 8, 8,

  2, 6, 2, 6, 2, 1
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


    if(thisNote == 0){
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Never gonna give");
      lcd.setCursor(0, 1);
      lcd.print("you up");
    }
    else if(thisNote == 7){
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Never gonna let");
      lcd.setCursor(0, 1);
      lcd.print("you down");
    }
    else if(thisNote == 14){
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Never gonna run");
      lcd.setCursor(0, 1);
      lcd.print("around and");
    }
    else if(thisNote == 22){
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("desert you");
      lcd.setCursor(0, 1);
      lcd.print("");
    }
    else if(thisNote == 25){
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Never gonna make");
      lcd.setCursor(0, 1);
      lcd.print("you cry");
    }
    else if(thisNote == 32){
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Never gonna say");
      lcd.setCursor(0, 1);
      lcd.print("goodbye");
    }
    else if(thisNote == 39){
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Never gonna tell");
      lcd.setCursor(0, 1);
      lcd.print("a lie and hurt");

    }
    else if(thisNote == 48){
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("you");
      lcd.setCursor(0, 1);
      lcd.print("a lie and hurt");
    }

    delay(duration * 1.3);
    digitalWrite(leds[thisNote % 3], LOW);
    noTone(buzzer);
  }
}
