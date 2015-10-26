class FixBankruptcySpelling < ActiveRecord::Migration
  def change
    rename_column :applications, :bankrupcy, :bankruptcy
  end
end
