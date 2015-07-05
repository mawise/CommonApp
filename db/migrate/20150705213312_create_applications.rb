class CreateApplications < ActiveRecord::Migration
  def change
    create_table :applications do |t|
      t.string :last_name
      t.string :first_name
      t.string :middle_name
      t.string :ssn
      t.string :other_names
      t.date :dob
      t.string :email
      t.string :home_phone
      t.string :cell_phone
      t.string :id_type
      t.string :id_number
      t.string :id_issuer
      t.string :id_exp_date
      t.string :id_other
      t.integer :address_one_id
      t.integer :current_rent
      t.integer :address_two_id
      t.integer :address_three_id
      t.string :occupant_one
      t.string :occupant_two
      t.string :occupant_three
      t.string :occupant_four
      t.string :occupant_five
      t.string :occupant_six
      t.boolean :pet_status
      t.string :pet_describe
      t.boolean :waterbed_status
      t.string :waterbed_describe
      t.integer :current_employer_id
      t.integer :current_income
      t.string :current_income_per
      t.integer :previous_eployer_id
      t.string :other_income_source_one
      t.integer :other_income_amount_one
      t.string :other_income_frequency_one
      t.string :other_income_source_two
      t.integer :other_income_amount_two
      t.string :other_income_frequency_two
      t.integer :bank_account_one_id
      t.integer :bank_account_two_id
      t.integer :debt_one_id
      t.integer :debt_two_id
      t.integer :debt_three_id
      t.integer :debt_four_id
      t.integer :debt_five_id
      t.integer :debt_six_id
      t.integer :emergency_contact_one_id
      t.integer :emergency_contact_two_id
      t.integer :personal_reference_one_id
      t.integer :personal_reference_two_id
      t.integer :car_one_id
      t.integer :car_two_id
      t.string :other_cars
      t.boolean :bankrupcy
      t.boolean :eviction
      t.boolean :drugs
      t.string :rental_address
      t.integer :rent_amount
      t.string :rent_per
      t.integer :deposit_amount

      t.timestamps null: false
    end
  end
end
