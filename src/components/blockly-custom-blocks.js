import Blockly from 'blockly'
import 'blockly/python'

Blockly.Blocks['speed'] = {
  init: function () {
    this.appendDummyInput().appendField('hastighet').appendField(new Blockly.FieldNumber(5), 'SPEED')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(900)
    this.setTooltip('Endre hastigheten på skilpadden (0 er superraskt)')
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
    this.setTooltip('Flytt skilpadden fremover')
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
    this.setTooltip('Flytt skilpadden bakover')
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
    this.setTooltip('Flytt skilpadden til en posisjon')
  },
}

Blockly.Python['goto'] = function (block) {
  const x = block.getFieldValue('X')
  const y = block.getFieldValue('Y')
  return `goto(${x}, ${y})\n`
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
    this.setTooltip('Roter skilpadden til høyre')
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
    this.setTooltip('Roter skilpadden til venstre')
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
    this.setTooltip('Ikke tegne mens skilpadden beveger seg')
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
    this.setTooltip('Tegne mens skilpadden beveger seg')
  },
}

Blockly.Python['penDown'] = function () {
  return `down()\n`
}

Blockly.Msg.CONTROLS_REPEAT_TITLE = 'gjenta %1 ganger'
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = 'Kjør blokkene inne i denne blokken gjentatte ganger'
