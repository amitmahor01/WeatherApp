# 🌤️ Weather Dashboard

A modern, responsive weather application built with Next.js, TypeScript, and Tailwind CSS. Features real-time weather data, city search with autocomplete, geolocation support, and beautiful animations.

![Weather Dashboard](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🌍 **Real-time Weather Data** - Get current weather information for any location
- 🔍 **Smart City Search** - Autocomplete with debounced search functionality
- 📍 **Geolocation Support** - Get weather for your current location
- 🎨 **Modern UI/UX** - Glass morphism design with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Next.js for optimal speed
- 🎯 **TypeScript** - Full type safety and better development experience
- 🌈 **Weather Animations** - Dynamic weather representations (easily customizable)
- 🔒 **Secure API Routes** - Server-side API calls for better security

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenWeatherMap API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweathermap_api_key_here
   ```

4. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard
   - Replace `your_openweathermap_api_key_here` with your actual API key

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
weather-app/
├── app/
│   ├── api/                 # Next.js API routes
│   │   ├── weather/
│   │   │   ├── route.ts     # Weather by city name
│   │   │   └── coordinates/
│   │   │       └── route.ts # Weather by coordinates
│   │   └── geocode/
│   │       └── route.ts     # City search/geocoding
│   ├── components/          # React components
│   │   ├── CitySearch.tsx   # City search with autocomplete
│   │   ├── Highlights.tsx   # Major weather metrics display
│   │   ├── Search.tsx       # Main search container
│   │   ├── WeatherAnimation.tsx # Weather animations
│   │   ├── WeatherDetails.tsx   # Detailed weather info
│   │   └── WeatherDisplay.tsx   # Weather info display
│   ├── service/
│   │   └── weather.ts      # Client-side service functions
│   ├── types/
│   │   └── weather.ts      # TypeScript interfaces
│   ├── utils/
│   │   ├── icons.ts        # FontAwesome icon utilities
│   │   └── weatherUtils.ts # Weather utility functions
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page component
├── public/                 # Static assets
├── .env.local             # Environment variables (create this)
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## 🛠️ Customization Guide

### Adding New Weather Metrics

1. **Update the WeatherData interface** in `app/types/weather.ts`
2. **Add utility functions** in `app/utils/weatherUtils.ts`
3. **Create new components** or update existing ones in `app/components/`

### Customizing the Design

#### Colors and Theme
- Modify `app/globals.css` for global color variables
- Update Tailwind classes in components for specific styling
- The app uses a dark theme with glass morphism effects

#### Layout Changes
- Main layout is in `app/page.tsx`
- Two-column layout: Search (left) and Weather tiles (right)
- Responsive design with mobile-first approach

### Adding Weather Animations

The current implementation uses emoji-based animations. To upgrade to Lottie animations:

1. **Install Lottie React**
   ```bash
   npm install lottie-react
   ```

2. **Download weather animations** from [LottieFiles](https://lottiefiles.com/free-animations/weather)

3. **Update WeatherAnimation component** in `app/components/WeatherAnimation.tsx`

4. **Replace emoji logic** with Lottie animation data

### API Customization

#### Using Different Weather APIs
1. Update the API routes in `app/api/weather/route.ts` and `app/api/weather/coordinates/route.ts`
2. Modify `app/service/weather.ts` for new API structure
3. Update TypeScript interfaces in `app/types/weather.ts`

#### Adding More API Features
- 5-day forecast
- Air quality data
- Historical weather data
- Weather alerts

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_OPENWEATHER_API_KEY` | OpenWeatherMap API key | Yes |

### API Routes

The app uses Next.js API routes for secure server-side API calls:

- **`/api/weather?city={city}`** - Get weather by city name
- **`/api/weather/coordinates?lat={lat}&lon={lon}`** - Get weather by coordinates
- **`/api/geocode?q={query}&limit={limit}`** - Get city suggestions

### Benefits of API Routes

- 🔒 **Security** - API keys are hidden from client-side code
- ⚡ **Performance** - Server-side caching and optimization
- 🛡️ **Rate Limiting** - Better control over API usage
- 🔄 **Error Handling** - Centralized error management

## 📱 Features Explained

### City Search with Autocomplete
- **Debounced search** (300ms delay) to reduce API calls
- **Autocomplete dropdown** with city, state, and country
- **Click outside to close** functionality
- **Loading states** for better UX

### Geolocation
- **Browser geolocation API** integration
- **Error handling** for location permission denied
- **Fallback to default city** if location unavailable

### Weather Display
- **Current conditions** with temperature, description, and icon
- **Major metrics** in highlight tiles (wind, humidity, visibility, pressure)
- **Detailed information** in expandable sections
- **Weather animations** based on current conditions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Similar to Vercel deployment
- **Railway**: Great for full-stack applications
- **AWS/GCP**: For enterprise deployments

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for weather data API
- [FontAwesome](https://fontawesome.com/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Next.js](https://nextjs.org/) for the framework
- [LottieFiles](https://lottiefiles.com/) for animation inspiration

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Check the documentation above
- Review the code comments for implementation details

## 🔄 Updates and Maintenance

### Regular Maintenance
- Keep dependencies updated
- Monitor API usage and limits
- Test on different devices and browsers
- Update weather condition mappings as needed

### Future Enhancements
- [ ] 5-day weather forecast
- [ ] Weather alerts and notifications
- [ ] Multiple language support
- [ ] Dark/light theme toggle
- [ ] Weather history charts
- [ ] Air quality index
- [ ] Weather maps integration

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS**
