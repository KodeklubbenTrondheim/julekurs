import Blockly from 'blockly'
import 'blockly/python'
import * as Nb from 'blockly/msg/nb'

Blockly.setLocale(Nb)

Blockly.Blocks['speed'] = {
  init: function () {
    if (!this.jsonInit) return
    this.jsonInit({
      message0: 'hastighet %1',
      args0: [
        {
          type: 'input_value',
          name: 'SPEED',
          check: 'Number',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 900,
      tooltip: 'Endre hastigheten på avataren (0 er superraskt)',
    })
  },
}

Blockly.Python['speed'] = function (block) {
  const value = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC) || '0'
  return `speed(${value})\n`
}

Blockly.Blocks['forward'] = {
  init: function () {
    if (!this.jsonInit) return
    this.jsonInit({
      message0: 'fremover %1',
      args0: [
        {
          type: 'input_value',
          name: 'DISTANCE',
          check: 'Number',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 900,
      tooltip: 'Flytt avataren fremover',
    })
  },
}

Blockly.Python['forward'] = function (block) {
  const value = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC) || '0'
  return `forward(${value})\n`
}

Blockly.Blocks['backward'] = {
  init: function () {
    if (!this.jsonInit) return
    this.jsonInit({
      message0: 'bakover %1',
      args0: [
        {
          type: 'input_value',
          name: 'DISTANCE',
          check: 'Number',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 900,
      tooltip: 'Flytt avataren bakover',
    })
  },
}

Blockly.Python['backward'] = function (block) {
  const value = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC) || '0'
  return `backward(${value})\n`
}

Blockly.Blocks['goto'] = {
  init: function () {
    if (!this.jsonInit) return
    this.jsonInit({
      message0: 'gå til x: %1 y: %2',
      args0: [
        {
          type: 'input_value',
          name: 'X',
          check: 'Number',
        },
        {
          type: 'input_value',
          name: 'Y',
          check: 'Number',
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 900,
      tooltip: 'Flytt avataren til en posisjon',
    })
  },
}

Blockly.Python['goto'] = function (block) {
  const x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC) || '0'
  const y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC) || '0'
  return `goto(${x}, ${y})\n`
}

Blockly.Blocks['gotoRandom'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('gå til tilfeldig posisjon')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Flytt avataren til en tilfeldig posisjon på bildet')
  },
}

Blockly.Python['gotoRandom'] = function () {
  return `goto(int(400 * random.random() - 200), int(400 * random.random() - 200))\n`
}

Blockly.Blocks['circle'] = {
  init: function () {
    if (!this.jsonInit) return
    this.jsonInit({
      message0: 'gå i sirkel',
      message1: 'med klokka ↻ %1',
      args1: [
        {
          type: 'field_checkbox',
          name: 'DIRECTION',
          checked: true,
        },
      ],
      message2: 'radius: %1',
      args2: [
        {
          type: 'input_value',
          name: 'RADIUS',
          check: 'Number',
        },
      ],
      message3: 'vinkel: %1',
      args3: [
        {
          type: 'input_value',
          name: 'ANGLE',
          check: 'Number',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 900,
      tooltip: 'Flytt avataren i en sirkel',
    })
  },
}

Blockly.Python['circle'] = function (block) {
  const dir = block.getFieldValue('DIRECTION') === 'TRUE' ? -1 : 1
  const r = Blockly.Python.valueToCode(block, 'RADIUS', Blockly.Python.ORDER_ATOMIC) || '0'
  const a = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_ATOMIC) || '0'
  return `circle(${dir} * ${r}, ${a})\n`
}

Blockly.Blocks['right'] = {
  init: function () {
    if (!this.jsonInit) return
    this.jsonInit({
      message0: 'roter ↻ %1',
      args0: [
        {
          type: 'input_value',
          name: 'DEGREES',
          check: 'Number',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 900,
      tooltip: 'Roter avataren antall grader til høyre (med klokka)',
    })
  },
}

Blockly.Python['right'] = function (block) {
  const value = Blockly.Python.valueToCode(block, 'DEGREES', Blockly.Python.ORDER_ATOMIC) || '0'
  return `right(${value})\n`
}

Blockly.Blocks['left'] = {
  init: function () {
    if (!this.jsonInit) return
    this.jsonInit({
      message0: 'roter ↺ %1',
      args0: [
        {
          type: 'input_value',
          name: 'DEGREES',
          check: 'Number',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 900,
      tooltip: 'Roter avataren antall grader til venstre (mot klokka)',
    })
  },
}

Blockly.Python['left'] = function (block) {
  const value = Blockly.Python.valueToCode(block, 'DEGREES', Blockly.Python.ORDER_ATOMIC) || '0'
  return `left(${value})\n`
}

Blockly.Blocks['sideways'] = {
  init: function () {
    if (!this.jsonInit) return
    this.jsonInit({
      message0: 'sidelengs %1',
      args0: [
        {
          type: 'input_value',
          name: 'DISTANCE',
          check: 'Number',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 900,
      tooltip: 'Flytt avataren sidelengs',
    })
  },
}

Blockly.Python['sideways'] = function (block) {
  const value = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC) || '0'
  return `sideways(${value})\n`
}

Blockly.Blocks['color'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('sett farge').appendField(new Blockly.FieldColour('#ff0000'), 'COLOR')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Skift farge på streken')
  },
}

Blockly.Python['color'] = function (block) {
  const value = block.getFieldValue('COLOR')
  return `color("${value}")\n`
}

Blockly.Blocks['randomColor'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('sett en tilfeldig farge')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Skift farge på streken til en tilfeldig farge')
  },
}

Blockly.Python['randomColor'] = function () {
  return `color(random.random(), random.random(), random.random())\n`
}

Blockly.Blocks['penUp'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('ta opp pennen')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Ikke tegne mens avataren beveger seg')
  },
}

Blockly.Python['penUp'] = function () {
  return `up()\n`
}

Blockly.Blocks['penDown'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('ta ned pennen')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Tegne mens avataren beveger seg')
  },
}

Blockly.Python['penDown'] = function () {
  return `down()\n`
}

Blockly.Blocks['penSize'] = {
  init: function () {
    if (!this.jsonInit) return
    this.jsonInit({
      message0: 'sett penstørrelse til %1',
      args0: [
        {
          type: 'input_value',
          name: 'SIZE',
          check: 'Number',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 280,
      tooltip: 'Endre størrelsen på pennen',
    })
  },
}

Blockly.Python['penSize'] = function (block) {
  const size = Blockly.Python.valueToCode(block, 'SIZE', Blockly.Python.ORDER_ATOMIC) || '1'
  return `pensize(${size} * scale)\n`
}

Blockly.Blocks['dot'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('tegn en prikk ⚪')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Tegn en prikk i nåværende farge og pen-størrelse. Fin til å tegne snø ❄')
  },
}

Blockly.Python['dot'] = function () {
  return `dot()\n`
}

Blockly.Blocks['write'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('skriv').appendField(new Blockly.FieldTextInput('God Jul!'), 'TEXT')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Skriv tekst på bildet')
  },
}

Blockly.Python['write'] = function (block) {
  const text = block.getFieldValue('TEXT')
  return `write("${text}", move=False, align=textalign, font=(fontname, fontsize, fonttype))\n`
}

Blockly.Blocks['fontsize'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('sett tekststørrelsen til').appendField(new Blockly.FieldNumber(24), 'SIZE')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Endre størrelse på teksten')
  },
}

Blockly.Python['fontsize'] = function (block) {
  const size = block.getFieldValue('SIZE')
  return `fontsize = ${size}\n`
}

Blockly.Blocks['fontname'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput()
      .appendField('velg font')
      .appendField(
        new Blockly.FieldDropdown([
          [
            { src: process.env.PUBLIC_URL + '/bilder/helvetica.png', width: 100, height: 28, alt: 'Helvetica' },
            'Helvetica',
          ],
          [
            { src: process.env.PUBLIC_URL + '/bilder/comic-sans-ms.png', width: 90, height: 28, alt: 'Comic Sans MS' },
            'Comic Sans MS',
          ],
          [
            {
              src: process.env.PUBLIC_URL + '/bilder/handwritten.png',
              width: 120,
              height: 28,
              alt: 'Monotype Corsiva',
            },
            'Monotype Corsiva',
          ],
          [
            { src: process.env.PUBLIC_URL + '/bilder/monospace.png', width: 100, height: 28, alt: 'Monospace' },
            'Monospace',
          ],
        ]),
        'NAME'
      )
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Endre hvilken type font som blir brukt')
  },
}

Blockly.Python['fontname'] = function (block) {
  const name = block.getFieldValue('NAME')
  return `fontname = "${name}"\n`
}

Blockly.Blocks['fonttype'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput()
      .appendField('velg fonttype')
      .appendField(
        new Blockly.FieldDropdown([
          [{ src: process.env.PUBLIC_URL + '/bilder/normal.png', width: 60, height: 24, alt: 'normal' }, 'normal'],
          [{ src: process.env.PUBLIC_URL + '/bilder/bold.png', width: 60, height: 24, alt: 'bold' }, 'bold'],
          [{ src: process.env.PUBLIC_URL + '/bilder/italic.png', width: 60, height: 24, alt: 'italic' }, 'italic'],
        ]),
        'TYPE'
      )
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Endre hvilken fonttype som blir brukt')
  },
}

Blockly.Python['fonttype'] = function (block) {
  const type = block.getFieldValue('TYPE')
  return `fonttype = "${type}"\n`
}

Blockly.Blocks['textalign'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput()
      .appendField('juster tekst til')
      .appendField(
        new Blockly.FieldDropdown([
          ['høyre ➡', 'left'],
          ['midten', 'center'],
          ['⬅ venstre', 'right'],
        ]),
        'ALIGN'
      )
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Velge hvor teksten blir skrevet i forhold til avataren')
  },
}

Blockly.Python['textalign'] = function (block) {
  const align = block.getFieldValue('ALIGN')
  return `textalign = "${align}"\n`
}

Blockly.Blocks['begin_fill'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('start fyll')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Start å fylle et område med farge')
  },
}

Blockly.Python['begin_fill'] = function () {
  return `begin_fill()\n`
}

Blockly.Blocks['end_fill'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('slutt fyll')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Slutt å fylle et område med farge')
  },
}

Blockly.Python['end_fill'] = function () {
  return `end_fill()\n`
}

Blockly.Blocks['hideturtle'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('skjul avatar 🙈')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(180)
    this.setTooltip('Ikke vis avataren mens den tegner')
  },
}

Blockly.Python['hideturtle'] = function () {
  return `hideturtle()\n`
}

Blockly.Blocks['showturtle'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('vis avatar 🙉')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(180)
    this.setTooltip('Vis avataren mens den tegner')
  },
}

Blockly.Python['showturtle'] = function () {
  return `showturtle()\n`
}

Blockly.Blocks['shape'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput()
      .appendField('endre avatar til')
      .appendField(
        new Blockly.FieldDropdown([
          ['🤶', 'nisse-old-female'],
          ['🎅', 'nisse-old-male'],
          ['🐢', 'turtle'],
          ['▶', 'triangle'],
          ['⚪', 'circle'],
          ['⬜', 'square'],
        ]),
        'SHAPE'
      )
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(180)
    this.setTooltip('Endre avataren')
  },
}

Blockly.Python['shape'] = function (block) {
  const shape = block.getFieldValue('SHAPE')
  return `shape("${shape}")\n`
}

Blockly.Blocks['stamp'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('stemple avataren')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(180)
    this.setTooltip('Stemple en kopi av avataren på tegningen på nåværende posisjon')
  },
}

Blockly.Python['stamp'] = function () {
  return `stamp()\n`
}

Blockly.Blocks['commentStart'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('hopp over koden under 🦘')

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(0)
    this.setTooltip('Legge til starten på en kommentar (brukes til å hoppe over kode)')
  },
}

Blockly.Python['commentStart'] = function () {
  return `"""\n`
}

Blockly.Blocks['commentEnd'] = {
  init: function () {
    if (!this.jsonInit) return
    this.appendDummyInput().appendField('hopp inn i koden igjen 🦘')

    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(80)
    this.setTooltip('Legge til slutten på en kommentar (brukes til å fortsette å kjøre koden)')
  },
}

Blockly.Python['commentEnd'] = function () {
  return `#"""\n`
}

Blockly.Msg.MATH_CHANGE_TITLE = 'endre %1 med %2'
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = ''
Blockly.Msg.MATH_RANDOM_INT_TITLE = 'tilfeldig tall fra: %1 til: %2'
