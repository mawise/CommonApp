class RemoveOldOtherIncomes < ActiveRecord::Migration
  def change
    remove_column :applications, :other_income_source_one
    remove_column :applications, :other_income_amount_one
    remove_column :applications, :other_income_frequency_one
    remove_column :applications, :other_income_source_two
    remove_column :applications, :other_income_amount_two
    remove_column :applications, :other_income_frequency_two
  end
end
