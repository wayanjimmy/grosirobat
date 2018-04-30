class MeController < ApiController
  def index
    json_response @current_user
  end
end
