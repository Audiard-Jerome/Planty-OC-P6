<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php blankslate_schema_type(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width" />
    <?php wp_head(); ?>
    </head>
        <body <?php body_class(); ?>>
        <?php wp_body_open(); ?>
                <header>
                        <div class="logo">
                        <?php if ( function_exists( 'the_custom_logo' ) ) {
	                                    the_custom_logo();
                                        }
                        ?>
                        </div>
                        <nav id="menu" role="navigation" >
                            <?php wp_nav_menu([
							    'theme_location' => 'header_menu',
                                "menu-class" => 'menu-item',
                                'container'  => false,
                                'items_wrap' => ' %3$s',
                                ]); 
                            ?>
                            </nav>
                    </div>
                </header>
            <div id="container">
            <main id="content" role="main">