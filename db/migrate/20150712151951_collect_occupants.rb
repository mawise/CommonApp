class CollectOccupants < ActiveRecord::Migration
  def change
    remove_column :applications, :occupant_one
    remove_column :applications, :occupant_two
    remove_column :applications, :occupant_three
    remove_column :applications, :occupant_four
    remove_column :applications, :occupant_five
    remove_column :applications, :occupant_six

    add_column :applications, :other_occupants, :string, array: true
  end
end
