/*
   s4a-lang-zh.js
   Simplified Chinese translation for Snap4Arduino!
   Snap4Arduino 简体中文翻译版
   z.cccczl@gmail.com
   Long Zhang 
*/

s4aTempDict = {

/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    Ä, ä   \u00c4, \u00e4
    Ö, ö   \u00d6, \u00f6
    Ü, ü   \u00dc, \u00fc
    ß      \u00df
*/
    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

    // arduino:
	'digital input':
		'数字接口输入',

	'digital output':
		'数字接口输出',

	'PWM':
		'PWM控制',

	'servo':
		'servo电机',

	'clockwise':
		'顺时针方向',

	'counter-clockwise':
		'逆时针方向',

	'stopped':
		'停止',

	'angle (0-180)':
		'角度 (0-180)',

    'connect to Arduino':
        '连接 Arduino',

    'disconnect Arduino':
        '断开 Arduino',

	'Connect Arduino':
        '连接 Arduino',

    'Disconnect Arduino':
        '断开 Arduino',

    'analog reading %analogPin':
        '读取模拟接口 %analogPin',

    'digital reading %digitalPin':
        '读取数字接口 %digitalPin',

    'connect arduino at %port':
        '选择arduino连接的串口 %port',

    'setup digital pin %digitalPin as %pinMode':
        '设置端口 %digitalPin 设置端口模式 %pinMode',

    'set digital pin %digitalPin to %b':
        '设置数字端口 %digitalPin 到 %b',

    'set servo %servoPin to %servoValue':
        '设置电机端口 %servoPin 和 %servoValue',

    'set PWM pin %pwmPin to %n':
        '设置PWM控制端口 pin %pwmPin 到 %n',

    'Connecting board at port\n': 
        '连接到arduino端口\n',

    'An Arduino board has been connected. Happy prototyping!':
        '已经连接到 Arduino.\n¡开始快乐的学习吧!',

    'Board was disconnected from port\n':
        'arduino端口连接被端口，请检测\n',

    'It seems that someone pulled the cable!':
        '¡Parece que alguien desconectó el cable!',

    'Error connecting the board.':
        '连接了错误或者无法支持的arduino',

    'There is already a board connected to this sprite':
        '已经完成arduino连接',

    'Could not connect an Arduino\nNo boards found':
        '无法连接到Arduino\n没有找到arduino',

    'Could not talk to Arduino in port\n':
        '和arduino通讯错误，请检测是否正确端口\n',

    'Check if firmata is loaded.':
        '检测 Firmata 代码是否正写入arduino.',

    'An error was detected on the board\n\n':
        'arduino检测错误\n\n',

    'Board is not connected':
        'arduino未连接'

};

// Add attributes to original SnapTranslator.dict.es
for (var attrname in s4aTempDict) { SnapTranslator.dict.es[attrname] = s4aTempDict[attrname]; }
