

/**
  * Enumeration of motors.
  */
enum BBMotor {
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="all"
    All
}
/**
 * Custom blocks
 */
//% weight=10 color=#0fbc11 icon="\uf1b9"
namespace transTest {
/**
  * Sound a buzz.
  *
  * @param flag Flag to set (0) for off and (1) for on.
  */
//% blockId="transTest_buzz" block="buzz sound %flag"
//% weight=95
export function buzz(flag: number): void {
    pins.digitalWritePin(DigitalPin.P14, flag === 0 ? 0 : 1);
}
}