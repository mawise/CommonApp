class Api::ApplicationsController < ApplicationController
  def create
    @application = Application.new(application_params)
  end

  def show
    @application = Application.find(params[:id])
    render json: @application
  end

  def destroy

  end

  private

  def application_params
    params.require(:application).allow(
      :last_name,
      :first_name,
      :middle_name,
      :ssn,
      :other_names,
      :dob,
      :email,
      :home_phone,
      :cell_phone,
      :id_type,
      :id_number,
      :id_issuer,
      :id_exp_date,
      :id_other,
      :current_rent,
      :other_occupants,
      :pet_status,
      :pet_describe,
      :waterbed_status,
      :waterbed_describe,
      :current_income,
      :current_income_per,
      :other_cars,
      :bankruptcy,
      :eviction,
      :drugs      
    )
  end
end
