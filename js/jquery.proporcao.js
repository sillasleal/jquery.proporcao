/**
 * Plugin responsável por manter componentes devidamente ajustados
 * @param {object} options Um objeto contendo as medidas referentes a proporção desejada. Opcional
 * @returns {undefined}
 */
$.fn.proporcao = function (options) {
    /**
     * @type @call;$ Definindo o componente a ser editado
     */
    var seletor = $(this);

    /**
     * @type @exp;options@pro;width|@exp;seletor@call;width Define a largura usada no calculo da proporção
     */
    var width = options.width;

    /**
     * @type @exp;options@pro;height|@exp;seletor@call;height Altura base para o calculo da proporção
     */
    var height = options.height;
    /*Validando as dimenções*/
    if (typeof (width) !== "number") {
        width = seletor.width();
    }
    if (typeof (height) !== "number") {
        height = seletor.height();
    }

    $(document).ready(function () {
        /*Mantendo a proporção durante o redimensionamento*/
        $(window).resize(function () {
            seletor.css({
                height: (seletor.width() / (width / height))
            });
        });
        $(window).resize();
    });
};