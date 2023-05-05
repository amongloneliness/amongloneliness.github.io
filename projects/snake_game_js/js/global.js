'use strict'

// асинхронная функция задержки
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
