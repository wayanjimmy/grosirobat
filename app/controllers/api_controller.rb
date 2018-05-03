class ApiController < ActionController::API
  include ActionController::MimeResponds
  include Response
  include ExceptionHandler

  before_action :authenticate_request

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result
    render json: { error: 'not authorized' }, status: 401 unless @current_user
  end

  def pagination_dict(collection, additional = {})
    pagination_meta = {
      total_pages: collection.total_pages,
      prev_page: collection.previous_page,
      next_page: collection.next_page
    }
    pagination_meta.merge(additional)
  end
end
