<?php
/**
 * gouts Block template.
 *
 * @param array $block The block settings and attributes.
 */

// Load values and assign defaults.
?>

<div class="acf__gouts">
    <?php 
    $image = get_field('image');
    $size = array('393', '262'); 
        if( $image ) {
            echo wp_get_attachment_image( $image, $size );
                }
    ?>
    <div class="acf__gouts-txt">
    <?php echo esc_html( get_field('gouts') ); ?>
    </div>        
</div>    
