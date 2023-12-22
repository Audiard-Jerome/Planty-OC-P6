<?php
/**
 * Testimonial Block template.
 *
 * @param array $block The block settings and attributes.
 */

// Load values and assign defaults.
?>

<div class="acf__temoignage">
    <div class="acf__image">
        <?php 
            $image = get_field('image');
            $size = array('126', '139'); // (thumbnail, medium, large, full or custom size)
            if( $image ) {
                echo wp_get_attachment_image( $image, $size );
                }
        ?>        
    </div>
    <div class="acf__txt_column">
        <div class="acf__author">
            <?php echo esc_html( get_field('author') ); ?>
        </div> 
        <div class="acf__quote">
            <?php echo wp_kses_post ( get_field('quote') ); ?>
        </div>    
    </div>    
</div>