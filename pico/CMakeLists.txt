cmake_minimum_required(VERSION 3.13)
include(pico_sdk_import.cmake)
project(picometer C CXX ASM)
set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 17)
pico_sdk_init()
add_executable(picometer
    picometer.c
)
pico_enable_stdio_usb(picometer 1)

pico_add_extra_outputs(picometer) 
target_link_libraries(picometer pico_stdlib hardware_adc)