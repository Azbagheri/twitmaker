class Tweet < ActiveRecord::Base

validates :message, presence: true
end
