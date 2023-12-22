<?php
/**
 * Testimonial Block template.
 *
 * @param array $block The block settings and attributes.
 */

// Load values and assign defaults.
?>

<div class="acf__portrait">
        <?php 
        $image = get_field('image');
            $size = array('126', '139'); 
            if( $image ) {
                echo wp_get_attachment_image( $image, $size );
                }
        ?>        
        <div class="acf__name">
            <?php echo esc_html( get_field('name') ); ?>
        </div> 
        <div class="acf__job">
            <?php echo wp_kses_post ( get_field('job') ); ?>
        </div>    
    </div>    
</div>