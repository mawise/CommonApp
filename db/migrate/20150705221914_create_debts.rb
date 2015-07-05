class CreateDebts < ActiveRecord::Migration
  def change
    create_table :debts do |t|
      t.string :creditor_name
      t.string :creditor_address
      t.string :creditor_phone
      t.integer :monthly_payment

      t.timestamps null: false
    end
  end
end
