class AddUserId < ActiveRecord::Migration
  def change
    add_column :applications, :user_id, :integer
    add_index :applications, :user_id, unique: true
  end
end
