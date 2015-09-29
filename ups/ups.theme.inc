<?php

/**
 * @file
 * Theme functions for the ups module.
 */

/**
 * Theme function to format the UPS service name and rate amount line-item
 * shown to the customer.
 *
 * @param array $variables
 *   Associative array containing information needed to theme a quote.
 *   Contains two keys:
 *   - service: The UPS service name.
 *   - packages: Package information.
 *
 * @ingroup themeable
 */
function theme_ups_option_label(array $variables) {
  $service = $variables['service'];
  $packages = $variables['packages'];

  // Start with logo as required by the UPS terms of service.
  $output  = theme('image', array(
    'uri' => drupal_get_path('module', 'ups') . '/ups_logo.gif',
    'alt' => t('UPS logo'),
    'attributes' => array('class' => 'ups-logo')
  ));

  // Add the UPS service name.
  $output .= t('@service Rate', array('@service' => $service));

  // Add package information
  $output .= ' (' . \Drupal::translation()->formatPlural(count($packages), '1 package', '@count packages') . ')';

  return $output;
}
