/**
 * @file
 * Utility functions to display settings summaries on vertical tabs.
 */

(function ($) {

Drupal.behaviors.upsAdminFieldsetSummaries = {
  attach: function (context) {
    $('details#edit-ups-credentials', context).drupalSetSummary(function(context) {
      var server = $('#edit-ups-connection-address :selected', context).text().toLowerCase();
      return Drupal.t('Using UPS @role server', { '@role': server });
    });

    $('details#edit-uc-ups-markups', context).drupalSetSummary(function(context) {
      return Drupal.t('Rate markup') + ': '
        + $('#edit-ups-rate-markup', context).val() + ' '
        + $('#edit-ups-rate-markup-type', context).val() + '<br />'
        + Drupal.t('Weight markup') + ': '
        + $('#edit-ups-weight-markup', context).val() + ' '
        + $('#edit-ups-weight-markup-type', context).val();
    });

    $('details#edit-ups-quote-options', context).drupalSetSummary(function(context) {
      if ($('#edit-ups-insurance').is(':checked')) {
        return Drupal.t('Packages are insured');
      }
      else {
        return Drupal.t('Packages are not insured');
      }
    });

  }
};

})(jQuery);
