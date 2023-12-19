<div class="plugin">
    <div class="plugin__content">
        <p class="plugin__title">
            <?php the_field( 'title' ); ?>
        </p>
        <p class="plugin__description">
            <?php the_field( 'description' ); ?>
        </p>
        <p>
        <a href="<?php the_field( 'url' ); ?>" class="plugin__link" style="background-color: <?php the_field( 'color' ); ?>">
            Télécharger l'extension
        </a>
        </p>
    </div>
    <div class="plugin__icon">
    <?php if( get_field('image') ): ?>
    <img src="<?php the_field('image'); ?>" />
<?php endif; ?>
        <p>test icon</p>
    </div>
</div>