<section id="statistics" class="position-relative text-center text-white">
    <div class="statistics-bg position-absolute top-0 start-0 w-100 h-100 z-0"></div>
    <div class="container position-relative z-1">
        <div class="row justify-content-center">
			<?php
			if (have_rows('statistics_repeater', 'option')) :?>
				<?php while (have_rows('statistics_repeater', 'option')) : the_row();
					$number = get_sub_field('stat_number');
					$label = get_sub_field('stat_label');
					?>
                    <div class="col-6 col-md-3 mb-4">
                        <div class="stat-box">
                            <div class="stat-number fw-bold display-4" data-target="<?php echo esc_attr($number); ?>">
								<?php echo esc_html($number); ?>
                            </div>
                            <div class="stat-label bg-pink text-white mt-3 py-2 fw-bold">
								<?php echo esc_html($label); ?>
                            </div>
                        </div>
                    </div>
				<?php endwhile;
			endif;
			?>
        </div>
    </div>
</section>
