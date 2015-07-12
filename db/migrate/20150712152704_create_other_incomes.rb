class CreateOtherIncomes < ActiveRecord::Migration
  def change
    create_table :other_incomes do |t|
      t.string :source, null: false
      t.integer :amount, null: false
      t.string :frequency, null: false
      t.integer :application_id, null: false

      t.timestamps null: false
    end
  end
end
