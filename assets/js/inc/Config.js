var Config=
{
    AJAX_SECONDS:                                   15,
    AJAX_DURATION:                                  120,        
    AJAX_INDEX_TIMESTAMP:                           0,        
    AJAX_INDEX_SENSOR_LEFT:                         1,
    AJAX_INDEX_SENSOR_RIGHT:                        2,
    AJAX_INDEX_SENSOR_UV:                           7,
    AJAX_INDEX_MOTOR_LEFT:                          8,
    AJAX_INDEX_MOTOR_RIGHT:                         9,
    
    MYROBOTS_SECONDS:                               30,
    
    CANVAS_TARGET_FPS:                              60,
    WINDOW_WIDTH:                                   800,
    WINDOW_HEIGHT:                                  600,
    ROBOT_WIDTH:                                    40,
    ROBOT_HEIGHT:                                   30,
    WORLD_SCALE:                                    1, //1 cm = n px
    ROBOT_SENSOR_L_CENTEROFFSET_X:                  -20,
    ROBOT_SENSOR_R_CENTEROFFSET_X:                  20,    
    ROBOT_SENSOR_L_CENTEROFFSET_Y:                  -15,
    ROBOT_SENSOR_R_CENTEROFFSET_Y:                  -15,
    ROBOT_RADIUS:                                   20,
    ROBOT_SENSOR_L_MAXRANGE:                        25,
    ROBOT_SENSOR_R_MAXRANGE:                        25,
    ROBOT_SENSOR_L_ANGLE:                           -(0.25*Math.PI), //45 deg
    ROBOT_SENSOR_R_ANGLE:                           (0.25*Math.PI),  //45 deg
    ROBOT_ENCODER_SENSITIVITY:128,
    ROBOT_ENCODER_CIRCUMFERENCE:                    (4.5*Math.PI),
    ROBOT_ENCODER_STEP_CM:                          null,
    ROBOT_ENCODER_STEP_DEGREES:                     null,
    WALL_PARTICLE_EXPIRY:                           90000, //ms
    WALL_PARTICLE_DISPLAY_WIDTH:                    2,
    DEBUG_PLAYBACK_SPEED:                           1 //TODO: ALWAYS 1!
}
Config.ROBOT_ENCODER_STEP_CM      = Config.ROBOT_ENCODER_CIRCUMFERENCE / Config.ROBOT_ENCODER_SENSITIVITY
//Tan(x) = O/A
Config.ROBOT_ENCODER_STEP_RADIANS = Math.atan(Config.ROBOT_ENCODER_STEP_CM / Config.ROBOT_RADIUS)
    
    
    
    
