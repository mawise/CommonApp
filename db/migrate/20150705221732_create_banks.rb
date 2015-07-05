class CreateBanks < ActiveRecord::Migration
  def change
    create_table :banks do |t|
      t.string :bank_name
      t.string :bank_address
      t.string :account_number

      t.integer :application_id
      t.timestamps null: false
    end
  end
end
