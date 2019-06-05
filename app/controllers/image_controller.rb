class ImageController < ApiController
    require 'pry'
    before_action :verify_token
    before_action :valid_client_image, except: [:index, :create, :create_batch]
    
    # GET image
    def index
        # show all images belonging to a certain user
        puts @user
        images = Image.where(user_id: @user.id)
        render json: {message: 'Loaded all content', data: images}, status: :ok
    end

    # GET image/:id
    def show
        image = Image.find(params[:id])
        render json: {message: 'Loaded information for one image', data: image}, status: :ok
    end

    # POST image
    def create
        image = Image.new(image_params)
        image.user = @user
        image.save!
        render json: {message: 'created image', data: {"image": image, "user": image.user}}, status: :ok
    end

    # POST image/batch
    def create_batch
        # assume that all input is valid
        images = batch_image_params[:images]
        values = images.map { |image| 
            "('#{image[:url]}', #{image[:inventory]}, #{image[:price]}, #{@user.id})" 
        }.join(",")
        ActiveRecord::Base.connection.execute("INSERT INTO images (url, inventory, price, user_id) VALUES #{values}")
        render json: {message: "successfully created images", data: images}
    end

    # GET inventory/:id
    def get_inventory
        image = Image.find(params[:id])
        render json: {message: 'get inventory', data: image.inventory}, status: :ok
    end

    # POST inventory/:id
    def set_inventory
        image = Image.find(params[:id])
        image.inventory = params[:inventory]
        image.save!
        render json: {message: 'set inventory', data: image}, status: :ok
    end

    # GET price/:id
    def get_price
        image = Image.find(params[:id])
        render json: {message: 'get price', data: image.price}, status: :ok
    end

    # POST price/:id
    def set_price
        image = Image.find(params[:id])
        image.price = params[:price]
        image.save!
        render json: {message: 'set price', data: image}, status: :ok
    end

    IMAGE_PARAMS = [:url, :inventory, :price].freeze

    def image_params
        params.require(:image).permit(*IMAGE_PARAMS)
    end

    def batch_image_params
        params.permit(images: [*IMAGE_PARAMS]).to_h
    end
end
