<?php
/**
 * gouts Block template.
 *
 * @param array $block The block settings and attributes.
 */

// Load values and assign defaults.
?>

<div class="acf__gouts-petit">
    <?php 
    $image = get_field('image');
    $size = array('192', '128'); 
        if( $image ) {
            echo wp_get_attachment_image( $image, $size );
                }
    ?>
    <div class="acf__gouts-petit-txt">
    <?php echo esc_html( get_field('gouts') ); ?>
    </div>        
</div>    
