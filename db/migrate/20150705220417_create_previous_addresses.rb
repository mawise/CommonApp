class CreatePreviousAddresses < ActiveRecord::Migration
  def change
    create_table :previous_addresses do |t|
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip
      t.date :date_in
      t.date :date_out
      t.string :agent_name
      t.string :agent_phone
      t.string :move_out_reason

      t.integer :application_id
      t.timestamps null: false
    end
  end
end
