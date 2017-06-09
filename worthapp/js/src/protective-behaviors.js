/* global $, updateProgressBar, initActivityPanels */

(function() {
    var resetActivity = function($container) {
        updateProgressBar($container, 0);
        $container.find('div.s0').removeClass('hidden');
        $container.find('button.s2-true,button.s2-false')
            .removeClass('disabled');
        $container.find('button.s2-true,button.s2-false')
            .removeAttr('disabled');
        $container.find('.alert.wrong-answer,.alert.right-answer')
            .addClass('hidden');
        $container.find('.alert.answer').addClass('hidden');
    };

    var calculateRiskLevel = function($container) {
        var riskLevel = 0;
        if ($container.find('.btn-danger').length > 1) {
            riskLevel = 3;
        } else if ($container.find('.btn-danger').length > 0) {
            riskLevel = 2;
        } else if ($container.find('.btn-warning').length > 0) {
            riskLevel = 1;
        }
        return riskLevel;
    };

    var updateRiskLevel = function($container, level) {
        var levels = [
            {
                'title': 'Not Risky',
                'class': 'success',
                'text': 'Great! It doesn\'t sound like you\'re involved ' +
                    'in any of the dangerous sexual activity we addressed.'
            },
            {
                'title': 'A little Risky',
                'class': 'warning',
                'text': 'TODO'
            },
            {
                'title': 'Risky',
                'class': 'danger',
                'text': 'TODO'
            },
            {
                'title': 'Very Risky',
                'class': 'danger',
                'text': 'TODO'
            }
        ];
        $container.find('.risk-level').removeClass(
            'alert-success alert-warning alert-danger');
        $container.find('.risk-level').addClass(
            'alert-' + levels[level]['class']);
        $container.find('.risk-level>.alert-heading').text(
            levels[level]['title']);
        $container.find('.risk-level>p').text(levels[level]['text']);
    };

    $(document).ready(function() {
        var $container = $('.container.protective-behaviors');
        initActivityPanels($container);

        $container.find('.pb-buttons button').click(function(e) {
            e.preventDefault();

            var $this = $(this);
            if ($this.hasClass('pb-red')) {
                $this.toggleClass('btn-danger');
            } else if ($this.hasClass('pb-yellow')) {
                $this.toggleClass('btn-warning');
            } else if ($this.hasClass('pb-green')) {
                $this.toggleClass('btn-success');
            }

            var $myContainer = $this.closest('.container');

            // Calculate risk level based on the user's answers
            var riskLevel = calculateRiskLevel($myContainer);

            // Update the risk level that's on the next panel
            updateRiskLevel($myContainer, riskLevel);
        });

        $container.find('button.s0').click(function(e) {
            e.preventDefault();
            var $myContainer = $(this).closest('.container');
            $(this).closest('div.panel').addClass('hidden');
            resetActivity($myContainer);
        });
    });
})();
