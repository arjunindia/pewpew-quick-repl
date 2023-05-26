/**
 * print(str)
print_debug_info()
set_level_size(width, height)
add_wall(start_x, start_y, end_x, end_y)
remove_wall(wall_id)
add_update_callback(update_callback)
get_number_of_players()
increase_score_of_player(player_index, delta)
increase_score_streak_of_player(player_index, delta)
get_score_streak_level(player_index)
stop_game()
get_player_inputs(player_index)
get_score_of_player(player_index)
configure_player(player_index, configuration)
configure_player_hud(player_index, configuration)
get_player_configuration(player_index)
configure_player_ship_weapon(ship_id, configuration)
add_damage_to_player_ship(ship_id, damage)
add_arrow_to_player_ship(ship_id, target_id, color)
remove_arrow_from_player_ship(ship_id, arrow_id)
make_player_ship_transparent(ship_id, transparency_duration)
set_player_ship_speed(ship_id, factor, offset, duration)
get_all_entities()
get_entities_colliding_with_disk(center_x, center_y, radius)
get_entity_count(type)
get_entity_type(entity_id)
play_ambient_sound(sound_path, index)
play_sound(sound_path, index, x, y)
create_explosion(x, y, color, scale, particle_count)
new_asteroid(x, y)
new_baf(x, y, angle, speed, lifetime)
new_baf_red(x, y, angle, speed, lifetime)
new_baf_blue(x, y, angle, speed, lifetime)
new_bomb(x, y, type)
new_bonus(x, y, type, config)
new_crowder(x, y)
new_floating_message(x, y, str, config)
new_customizable_entity(x, y)
new_inertiac(x, y, acceleration, angle)
new_mothership(x, y, type, angle)
new_pointonium(x, y, value)
new_player_ship(x, y, player_index)
new_player_bullet(x, y, angle, player_index)
new_rolling_cube(x, y)
new_rolling_sphere(x, y, angle, speed)
new_wary(x, y)
new_ufo(x, y, dx)
rolling_cube_set_enable_collisions_with_walls(entity_id, collide_with_walls)
ufo_set_enable_collisions_with_walls(entity_id, collide_with_walls)
entity_get_position(entity_id)
entity_get_is_alive(entity_id)
entity_get_is_started_to_be_destroyed(entity_id)
entity_set_position(entity_id, x, y)
entity_set_radius(entity_id, radius)
entity_set_update_callback(entity_id, callback)
entity_destroy(entity_id)
entity_react_to_weapon(entity_id, weapon)
customizable_entity_set_position_interpolation(entity_id, enable)
customizable_entity_set_mesh(entity_id, file_path, index)
customizable_entity_set_flipping_meshes(entity_id, file_path, index_0, index_1)
customizable_entity_set_mesh_color(entity_id, color)
customizable_entity_set_string(entity_id, text)
customizable_entity_set_mesh_xyz(entity_id, x, y, z)
customizable_entity_set_mesh_z(entity_id, z)
customizable_entity_set_mesh_scale(entity_id, scale)
customizable_entity_set_mesh_xyz_scale(entity_id, x_scale, y_scale, z_scale)
customizable_entity_set_mesh_angle(entity_id, angle, x_axis, y_axis, z_axis)
customizable_entity_skip_mesh_attributes_interpolation(entity_id)
customizable_entity_configure_music_response(entity_id, config)
customizable_entity_add_rotation_to_mesh(entity_id, angle, x_axis, y_axis, z_axis)
customizable_entity_set_visibility_radius(entity_id, radius)
customizable_entity_configure_wall_collision(entity_id, collide_with_walls, collision_callback)
customizable_entity_set_player_collision_callback(entity_id, collision_callback)
customizable_entity_set_weapon_collision_callback(entity_id, weapon_collision_callback)
customizable_entity_start_spawning(entity_id, spawning_duration)
customizable_entity_start_exploding(entity_id, explosion_duration)
 */
export const completions = [
  {
    label: "print",
    info: "Prints a string to the console.",
  },
  {
    label: "print_debug_info",
    info: "Prints debug information to the console.",
  },
  {
    label: "set_level_size",
    info: "Sets the size of the level.",
  },
  {
    label: "add_wall",
    info: "Adds a wall to the level.",
  },
  {
    label: "remove_wall",
    info: "Removes a wall from the level.",
  },
  {
    label: "add_update_callback",
    info: "Adds an update callback.",
  },
  {
    label: "get_number_of_players",
    info: "Returns the number of players.",
  },
  {
    label: "increase_score_of_player",
    info: "Increases the score of a player.",
  },
  {
    label: "increase_score_streak_of_player",
    info: "Increases the score streak of a player.",
  },
  {
    label: "get_score_streak_level",
    info: "Returns the score streak level of a player.",
  },
  {
    label: "stop_game",
    info: "Stops the game.",
  },
  {
    label: "get_player_inputs",
    info: "Returns the inputs of a player.",
  },
  {
    label: "get_score_of_player",
    info: "Returns the score of a player.",
  },
  {
    label: "configure_player",
    info: "Configures a player.",
  },
  {
    label: "configure_player_hud",
    info: "Configures the HUD of a player.",
  },
  {
    label: "get_player_configuration",
    info: "Returns the configuration of a player.",
  },
  {
    label: "configure_player_ship_weapon",
    info: "Configures the weapon of a ship.",
  },
  {
    label: "add_damage_to_player_ship",
    info: "Adds damage to a ship.",
  },
  {
    label: "add_arrow_to_player_ship",
    info: "Adds an arrow to a ship.",
  },
  {
    label: "remove_arrow_from_player_ship",
    info: "Removes an arrow from a ship.",
  },
  {
    label: "make_player_ship_transparent",
    info: "Makes a ship transparent.",
  },
  {
    label: "set_player_ship_speed",
    info: "Sets the speed of a ship.",
  },
  {
    label: "get_all_entities",
    info: "Returns all the entities.",
  },
  {
    label: "get_entities_colliding_with_disk",
    info: "Returns the entities colliding with a disk.",
  },
  {
    label: "get_entity_count",
    info: "Returns the number of entities of a type.",
  },
  {
    label: "get_entity_type",
    info: "Returns the type of an entity.",
  },
  {
    label: "play_ambient_sound",
    info: "Plays an ambient sound.",
  },
  {
    label: "play_sound",
    info: "Plays a sound.",
  },
  {
    label: "create_explosion",
    info: "Creates an explosion.",
  },
  {
    label: "new_asteroid",
    info: "Creates an asteroid.",
  },
  {
    label: "new_baf",
    info: "Creates a baf.",
  },
  {
    label: "new_baf_red",
    info: "Creates a red baf.",
  },
  {
    label: "new_baf_blue",
    info: "Creates a blue baf.",
  },
  {
    label: "new_bomb",
    info: "Creates a bomb.",
  },
  {
    label: "new_bonus",
    info: "Creates a bonus.",
  },
  {
    label: "new_crowder",
    info: "Creates a crowder.",
  },
  {
    label: "new_floating_message",
    info: "Creates a floating message.",
  },
  {
    label: "new_customizable_entity",
    info: "Creates a customizable entity.",
  },
  {
    label: "new_inertiac",
    info: "Creates an inertiac.",
  },
  {
    label: "new_mothership",
    info: "Creates a mothership.",
  },
  {
    label: "new_pointonium",
    info: "Creates a pointonium.",
  },
  {
    label: "new_player_ship",
    info: "Creates a player ship.",
  },
  {
    label: "new_player_bullet",
    info: "Creates a player bullet.",
  },
  {
    label: "new_rolling_cube",
    info: "Creates a rolling cube.",
  },
  {
    label: "new_rolling_sphere",
    info: "Creates a rolling sphere.",
  },
  {
    label: "new_wary",
    info: "Creates a wary.",
  },
  {
    label: "new_ufo",
    info: "Creates an ufo.",
  },
  {
    label: "rolling_cube_set_enable_collisions_with_walls",
    info: "Enables or disables collisions with walls for a rolling cube.",
  },
  {
    label: "ufo_set_enable_collisions_with_walls",
    info: "Enables or disables collisions with walls for an ufo.",
  },
  {
    label: "entity_get_position",
    info: "Gets the position of an entity.",
  },
  {
    label: "entity_get_is_alive",
    info: "Gets whether an entity is alive or not.",
  },
  {
    label: "entity_get_is_started_to_be_destroyed",
    info: "Gets whether an entity is started to be destroyed or not.",
  },
  {
    label: "entity_set_position",
    info: "Sets the position of an entity.",
  },
  {
    label: "entity_set_radius",
    info: "Sets the radius of an entity.",
  },
  {
    label: "entity_set_update_callback",
    info: "Sets the update callback of an entity.",
  },
  {
    label: "entity_destroy",
    info: "Destroys an entity.",
  },
  {
    label: "entity_react_to_weapon",
    info: "Makes an entity react to a weapon.",
  },
  {
    label: "customizable_entity_set_position_interpolation",
    info: "Sets whether the position of a customizable entity is interpolated or not.",
  },
  {
    label: "customizable_entity_set_mesh",
    info: "Sets the mesh of a customizable entity.",
  },
  {
    label: "customizable_entity_set_flipping_meshes",
    info: "Sets the flipping meshes of a customizable entity.",
  },
  {
    label: "customizable_entity_set_mesh_color",
    info: "Sets the color of the mesh of a customizable entity.",
  },
  {
    label: "customizable_entity_set_string",
    info: "Sets the string of a customizable entity.",
  },
  {
    label: "customizable_entity_set_mesh_xyz",
    info: "Sets the xyz of the mesh of a customizable entity.",
  },
  {
    label: "customizable_entity_set_mesh_z",
    info: "Sets the z of the mesh of a customizable entity.",
  },
  {
    label: "customizable_entity_set_mesh_scale",
    info: "Sets the scale of the mesh of a customizable entity.",
  },
  {
    label: "customizable_entity_set_mesh_xyz_scale",
    info: "Sets the xyz scale of the mesh of a customizable entity.",
  },
  {
    label: "customizable_entity_set_mesh_angle",
    info: "Sets the angle of the mesh of a customizable entity.",
  },
  {
    label: "customizable_entity_skip_mesh_attributes_interpolation",
    info: "Skips the mesh attributes interpolation of a customizable entity.",
  },
  {
    label: "customizable_entity_configure_music_response",
    info: "Configures the music response of a customizable entity.",
  },
  {
    label: "customizable_entity_add_rotation_to_mesh",
    info: "Adds a rotation to the mesh of a customizable entity.",
  },
  {
    label: "customizable_entity_set_visibility_radius",
    info: "Sets the visibility radius of a customizable entity.",
  },
  {
    label: "customizable_entity_configure_wall_collision",
    info: "Configures the wall collision of a customizable entity.",
  },
  {
    label: "customizable_entity_set_player_collision_callback",
    info: "Sets the player collision callback of a customizable entity.",
  },
  {
    label: "customizable_entity_set_weapon_collision_callback",
    info: "Sets the weapon collision callback of a customizable entity.",
  },
  {
    label: "customizable_entity_start_spawning",
    info: "Starts the spawning of a customizable entity.",
  },
  {
    label: "customizable_entity_start_exploding",
    info: "Starts the exploding of a customizable entity.",
  },
];
