import chartAdapt from './chartAdapt'
export default function chartAdaptToYear(data){
  return { type: 'SHOW_YEAR', payload: { stats: chartAdapt(data), month: null}}
}
