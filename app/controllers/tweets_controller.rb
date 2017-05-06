class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)

    respond_to do |format|
      format.html do
        if request.xhr?
          if @tweet.save
            render partial: 'single_tweet', locals: {tweet: @tweet}
          else
            render :index
          end
        else
          if @tweet.save
            redirect_to tweets_path
          else
            render :index
          end
        end
      end

      format.json do
        if @tweet.save
          render json: @tweet
        else
          render :index
        end
      end
    end  
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
