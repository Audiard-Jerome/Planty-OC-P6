<?php
//  add css perso
function theme_enqueue_styles(){
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
	wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/css/theme.css', array(), filemtime(get_stylesheet_directory() . '/css/theme.css'));
}

add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

// add custom logo
function planty_custom_logo_setup() {
	$defaults = array(
		'height'               => 20,
		'width'                => 200,
		'flex-height'          => true,
		'flex-width'           => true,
		'header-text'          => array( 'site-title', 'site-description' ),
		'unlink-homepage-logo' => true, 
	);
	add_theme_support( 'custom-logo', $defaults );
}
add_action( 'after_setup_theme', 'planty_custom_logo_setup' );

// Menu
function planty_menu() {
	add_theme_support('menu');
	register_nav_menus( array( 
                        'header_menu' => 'En tête du menu',
                        'footer_menu'  => 'Pied de page',
    ));
}
add_action( 'after_setup_theme', 'planty_menu' );


// custom logo on login page
function wpdev_filter_login_head() {
	if ( has_custom_logo() ) :
		$image = wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'full' );
		?>
		<style type="text/css">
			.login h1 a {
				background-image: url(<?php echo esc_url( $image[0] ); ?>);
				-webkit-background-size: <?php echo absint( $image[1] )?>px;
				background-size: <?php echo absint( $image[1] ) ?>px;
				height: <?php echo absint( $image[2] ) ?>px;
				width: <?php echo absint( $image[1] ) ?>px;
			}
		</style>
		<?php
	endif;
}

add_action( 'login_head', 'wpdev_filter_login_head', 100 );

// admin link

function add_admin_link($items, $args) {
	if( is_user_logged_in() && current_user_can('manage_options') && $args->theme_location == 'header_menu' ){
	$items .= '<li><a href="' . admin_url() . '">admin</a></li>';
	}
  return $items;
}
add_filter('wp_nav_menu_items', 'add_admin_link', 10, 2);



/**
 * We use WordPress's init hook to make sure
 * our blocks are registered early in the loading
 * process.
 *
 * @link https://developer.wordpress.org/reference/hooks/init/
 */
function planty_register_acf_blocks() {
    register_block_type( __DIR__ . '/blocks/temoignage' );
	register_block_type( __DIR__ . '/blocks/portrait' );
	register_block_type( __DIR__ . '/blocks/gouts' );
	register_block_type( __DIR__ . '/blocks/gouts-petit' );
}

add_action( 'init', 'planty_register_acf_blocks' );