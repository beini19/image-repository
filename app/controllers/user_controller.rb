class UserController < ApiController
    before_action :verify_token
    before_action :generate_token, only: :create
    before_action :manager_only, only: [:index, :show, :create]
    
    # GET user
    def index
        users = User.all
        render json: {message: 'users#index', data: users}, status: :ok
    end

    # GET user/:id
    def show
        user = User.find(params[:id])
        render json: {message: 'Loaded user information', data: user}, status: :ok
    end

    # POST user
    def create
        user = User.create(user_params)
        user.token = @token
        user.save!
        render json: {message: 'created user', data: user, token: @token}, status: :ok
    end

    private

    def generate_token
        @token = loop do
            random_token = SecureRandom.urlsafe_base64(nil, false)
            break random_token unless User.exists?(token: random_token)
        end
    end

    USER_PARAMS = [:user_type].freeze

    def user_params
        params.require(:user).permit(*USER_PARAMS)
    end
end
