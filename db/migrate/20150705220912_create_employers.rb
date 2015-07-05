class CreateEmployers < ActiveRecord::Migration
  def change
    create_table :employers do |t|
      t.string :company
      t.string :title
      t.date :start_date
      t.date :end_date
      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.string :supervisor
      t.string :hr_manager
      t.string :hr_phone

      t.integer :application_id
      t.timestamps null: false
    end
  end
end
