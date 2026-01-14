#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16,2);

void setup()
{
    lcd.init();
    lcd.clear();
    lcd.backlight();

}

void loop()
{

  for(int i = 0; i < 10; i++)
  {
    lcd.setCuror(0, 2);
    lcd.print(i);
  }
}