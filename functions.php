<?php
     wp_deregister_script('jquery');
     wp_register_script('jquery', get_template_directory_uri(). '/assets/js/jquery-3.5.1.min.js', false, null, true);
     wp_enqueue_script('jquery');

     wp_enqueue_script( 'bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js', array( 'jquery' ), '4.6.2', true );
     wp_enqueue_script( 'mainScript', get_template_directory_uri() . '/assets/js/script.js', array('jquery', 'postSEND'), null, true);
     wp_enqueue_script( 'sideScript', get_template_directory_uri() . '/assets/js/sidescript.js', array('jquery',), null, true);
     wp_enqueue_script( 'postSEND', get_template_directory_uri() . '/assets/js/POSTsender.js', array('jquery'), null, true);
     wp_localize_script( 'postSEND', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
     wp_enqueue_script( 'variables', get_template_directory_uri() . '/assets/js/variables-rus.js', array('jquery'), null, true);
     wp_enqueue_style( 'bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css', array(), '4.6.2', 'all' );
     wp_register_script('airSender', get_template_directory_uri(). '/assets/js/airSender.php', false, null, true);
     wp_enqueue_script('airSender');
     wp_register_script('checker', get_template_directory_uri(). '/assets/js/checker.php', false, null, true);
     wp_enqueue_script('checker');
     wp_enqueue_script('moment-js', 'https://cdn.jsdelivr.net/npm/airtable@3.1.0/dist/airtable.browser.js');
     wp_enqueue_style( 'main-css', get_stylesheet_uri() , array('bootstrap'));

     wp_enqueue_style( 'fullcalendar-style', 'https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.css' );
    wp_enqueue_style( 'fullcalendar-print-style', 'https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.print.min.css', array(), false, 'print' );
    
    // Подключаем скрипты FullCalendar
    wp_enqueue_script( 'moment-js', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js', array(), null, true );
    wp_enqueue_script( 'fullcalendar-js', 'https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.js', array( 'jquery', 'moment-js' ), null, true );

    //подключение к git
    wp_enqueue_style( 'my-style', 'https://raw.githubusercontent.com/Enjeer/Bullet-WP/style.css' );
?>