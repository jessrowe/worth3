/* eslint-env es6 */
/* global $, initActivityPanels */

(function() {
    $(document).ready(function() {
        var $container = $('.container.self-talk');
        initActivityPanels($container);

        $container.find('.s2 button[type="submit"]').click(function(e) {
            e.preventDefault();
            var $panel = $(this).closest('.panel');
            var correct = $container.find('input#optionsRadios3')
                .is(':checked');
            if (correct) {
                $panel.find('.alert-info').removeClass('hidden');
                $panel.find('.alert-danger').addClass('hidden');
            } else {
                $panel.find('.alert-info').addClass('hidden');
                $panel.find('.alert-danger').removeClass('hidden');
            }
        });

        var correct = [0, 1, 3, 4, 6];

        $container.find('button.get-answers').click(function(e) {
            e.preventDefault();
            var $panel = $(this).closest('.panel');
            $.each($panel.find('label'), function(k, v) {
                if (correct.indexOf(k) > -1) {
                    $(v).addClass('text-success');
                } else {
                    $(v).addClass('text-danger');
                }
            });
            $panel.find('.alert').removeClass('hidden');
        });

        $container.find('button.self-talk-done').click(function(e) {
            e.preventDefault();
            var $panel = $(this).closest('.panel');
            $panel.find('.alert').removeClass('hidden');
        });
    });
})();
