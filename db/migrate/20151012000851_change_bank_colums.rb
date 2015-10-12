class ChangeBankColums < ActiveRecord::Migration
  def change
    rename_column :banks, :bank_name, :name
    rename_column :banks, :bank_address, :address
  end
end
