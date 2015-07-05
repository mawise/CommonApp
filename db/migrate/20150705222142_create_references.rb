class CreateReferences < ActiveRecord::Migration
  def change
    create_table :references do |t|
      t.string :name
      t.string :address
      t.string :length
      t.string :occupation
      t.string :phone

      t.timestamps null: false
    end
  end
end
