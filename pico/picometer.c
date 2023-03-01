#include <stdio.h>
#include <math.h>
#include "pico/stdlib.h"
#include "hardware/gpio.h"
#include "hardware/adc.h"

void __not_in_flash_func(adc_capture)(uint16_t *buf, size_t count)
{
    adc_fifo_setup(true, false, 0, false, false);
    adc_run(true);
    for (int i = 0; i < count; i = i + 1)
        buf[i] = adc_fifo_get_blocking();
    adc_run(false);
    adc_fifo_drain();
}

int main(void)
{
    stdio_init_all();
    adc_init();
    adc_set_temp_sensor_enabled(true);

    // Set all pins to input (as far as SIO is concerned)
    gpio_set_dir_all_bits(0);
    for (int i = 2; i < 30; ++i)
    {
        gpio_set_function(i, GPIO_FUNC_SIO);
        if (i >= 26)
        {
            gpio_disable_pulls(i);
            gpio_set_input_enabled(i, false);
        }
    }

    while (1)
    {
        adc_select_input('0' - '0');
        uint32_t channel0result = adc_read();

        adc_select_input('1' - '0');
        uint32_t channel1result = adc_read();

        adc_select_input('2' - '0');
        uint32_t channel2result = adc_read();

        printf("%d-%d-%d\n", channel0result, channel1result, channel2result);
    }
}
