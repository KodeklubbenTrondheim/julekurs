import Blockly from 'blockly'
import 'blockly/python'

Blockly.Blocks['speed'] = {
  init: function () {
    this.appendDummyInput().appendField('hastighet').appendField(new Blockly.FieldNumber(5), 'SPEED')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Endre hastigheten på avataren (0 er superraskt)')
  },
}

Blockly.Python['speed'] = function (block) {
  const value = block.getFieldValue('SPEED')
  return `speed(${value})\n`
}

Blockly.Blocks['forward'] = {
  init: function () {
    this.appendDummyInput().appendField('fremover').appendField(new Blockly.FieldNumber(100), 'DISTANCE')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Flytt avataren fremover')
  },
}

Blockly.Python['forward'] = function (block) {
  const value = block.getFieldValue('DISTANCE')
  return `forward(${value})\n`
}

Blockly.Blocks['backward'] = {
  init: function () {
    this.appendDummyInput().appendField('bakover').appendField(new Blockly.FieldNumber(100), 'DISTANCE')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Flytt avataren bakover')
  },
}

Blockly.Python['backward'] = function (block) {
  const value = block.getFieldValue('DISTANCE')
  return `backward(${value})\n`
}

Blockly.Blocks['goto'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gå til x:')
      .appendField(new Blockly.FieldNumber(0), 'X')
      .appendField('y:')
      .appendField(new Blockly.FieldNumber(0), 'Y')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Flytt avataren til en posisjon')
  },
}

Blockly.Python['goto'] = function (block) {
  const x = block.getFieldValue('X')
  const y = block.getFieldValue('Y')
  return `goto(${x}, ${y})\n`
}

Blockly.Blocks['gotoRandom'] = {
  init: function () {
    this.appendDummyInput().appendField('gå til tilfeldig posisjon')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Flytt avataren til en tilfeldig posisjon på bildet')
  },
}

Blockly.Python['gotoRandom'] = function () {
  return `goto(int(400 * random() - 200), int(400 * random() - 200))\n`
}

Blockly.Blocks['circle'] = {
  init: function () {
    this.appendDummyInput().appendField('gå i sirkel')
    this.appendDummyInput().appendField('radius:').appendField(new Blockly.FieldNumber(100), 'RADIUS')
    this.appendDummyInput()
      .appendField('vinkel:')
      .appendField(new Blockly.FieldNumber(360), 'ANGLE')
      .appendField('grader')
    this.appendDummyInput().appendField('med klokka ↻').appendField(new Blockly.FieldCheckbox(true), 'DIRECTION')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Flytt avataren i en sirkel')
  },
}

Blockly.Python['circle'] = function (block) {
  const r = block.getFieldValue('RADIUS')
  const a = block.getFieldValue('ANGLE')
  const dir = block.getFieldValue('DIRECTION') === 'TRUE' ? -1 : 1
  return `circle(${dir * r},${a})\n`
}

Blockly.Blocks['right'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('roter ↻')
      .appendField(new Blockly.FieldNumber(90), 'DEGREES')
      .appendField('grader')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Roter avataren til høyre')
  },
}

Blockly.Python['right'] = function (block) {
  const value = block.getFieldValue('DEGREES')
  return `right(${value})\n`
}

Blockly.Blocks['left'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('roter ↺')
      .appendField(new Blockly.FieldNumber(90), 'DEGREES')
      .appendField('grader')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Roter avataren til venstre')
  },
}

Blockly.Python['left'] = function (block) {
  const value = block.getFieldValue('DEGREES')
  return `left(${value})\n`
}

Blockly.Blocks['color'] = {
  init: function () {
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
    this.appendDummyInput().appendField('sett en tilfeldig farge')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Skift farge på streken til en tilfeldig farge')
  },
}

Blockly.Python['randomColor'] = function () {
  return `color(random(), random(), random())\n`
}

Blockly.Blocks['penUp'] = {
  init: function () {
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
    this.appendDummyInput().appendField('set penstørrelse til').appendField(new Blockly.FieldNumber(5), 'SIZE')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(280)
    this.setTooltip('Endre størrelsen på pennen')
  },
}

Blockly.Python['penSize'] = function (block) {
  const size = block.getFieldValue('SIZE') * 4
  return `pensize(${size})\n`
}

Blockly.Blocks['begin_fill'] = {
  init: function () {
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
    this.appendDummyInput().appendField('skjul avatar')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(40)
    this.setTooltip('Ikke vis avataren mens den tegner')
  },
}

Blockly.Python['hideturtle'] = function () {
  return `hideturtle()\n`
}

Blockly.Blocks['showturtle'] = {
  init: function () {
    this.appendDummyInput().appendField('vis avatar')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(40)
    this.setTooltip('Vis avataren mens den tegner')
  },
}

Blockly.Python['showturtle'] = function () {
  return `showturtle()\n`
}

Blockly.Blocks['female'] = {
  init: function () {
    this.appendDummyInput().appendField('endre til 🤶')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(320)
    this.setTooltip('Endre avataren sitt kjønn til kvinne')
  },
}

Blockly.Python['female'] = function () {
  return `shape("nisse-old-female")\n`
}

Blockly.Blocks['male'] = {
  init: function () {
    this.appendDummyInput().appendField('endre til 🎅')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(220)
    this.setTooltip('Endre avataren sitt kjønn til mann')
  },
}

Blockly.Python['male'] = function () {
  return `shape("nisse-old-male")\n`
}

Blockly.Msg.CONTROLS_REPEAT_TITLE = 'gjenta %1 ganger'
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = 'Kjør blokkene inne i denne blokken gjentatte ganger'
