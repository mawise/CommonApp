class Api::ApplicationsController < ApiController
  before_action :require_logged_in!

  def index
    @application = current_user.application
  end

  def create
    @application = current_user.application.new(application_params)
  end

  def update
    @application = current_user.application
    if @application.update(application_params)
      render json: @application
    else
      render json: @application.errors, status: 422
    end
  end

  def destroy
    @application = current_user.application
    if @application.destroy
      render json: @application
    else
      render json: @application.errors.full_messages
    end
  end

  private

  def application_params
    params.require(:application).permit(
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
