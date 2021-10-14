import Blockly from 'blockly'
import 'blockly/python'

Blockly.Blocks['fremover'] = {
  init: function () {
    this.appendDummyInput().appendField('fremover').appendField(new Blockly.FieldNumber(100), 'DISTANCE')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(330)
    this.setTooltip('Flytt skilpadden fremover')
    this.setHelpUrl('')
  },
}

Blockly.Python['fremover'] = function (block) {
  const value = block.getFieldValue('DISTANCE')
  return `forward(${value})\n`
}

Blockly.Blocks['høyre'] = {
  init: function () {
    this.appendDummyInput().appendField('roter ↻').appendField(new Blockly.FieldNumber(90), 'DEGREES')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(330)
    this.setTooltip('Roter skilpadden til høyre')
    this.setHelpUrl('')
  },
}

Blockly.Python['høyre'] = function (block) {
  const value = block.getFieldValue('DEGREES')
  return `right(${value})\n`
}

Blockly.Blocks['venstre'] = {
  init: function () {
    this.appendDummyInput().appendField('roter ↺').appendField(new Blockly.FieldNumber(90), 'DEGREES')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(330)
    this.setTooltip('Roter skilpadden til venstre')
    this.setHelpUrl('')
  },
}

Blockly.Python['venstre'] = function (block) {
  const value = block.getFieldValue('DEGREES')
  return `left(${value})\n`
}

Blockly.Blocks['farge'] = {
  init: function () {
    this.appendDummyInput().appendField('farge').appendField(new Blockly.FieldColour('#ff0000'), 'COLOR')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setColour(330)
    this.setTooltip('Skift farge på streken')
    this.setHelpUrl('')
  },
}

Blockly.Python['farge'] = function (block) {
  const value = block.getFieldValue('COLOR')
  return `color("${value}")\n`
}
