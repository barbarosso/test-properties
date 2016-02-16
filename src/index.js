/**
 * @file        Main entry point of the main class
 * @file		Here you can listen to the api and trigger events via the eventbus
 * @author      Dreams & Creations <info@dreamsandcreations.be>
 * @copyright   2013-2016
 * @license     {@link }
 */
var mainPropertiesClass = require('./MainPropertiesClass');
var gsap = require('gsap');
console.log(gsap);
global.MainPropertiesClass = mainPropertiesClass;

module.exports = mainPropertiesClass;
