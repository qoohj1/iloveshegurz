<?php
namespace Shegurz\Controller;
use Think\Controller;
// define("TOKEN", "shegurzwx");
class ZtController extends Controller {
    public function sevendaysplan(){
      $this->display();
    }

    public function luckyturntable(){
      $this->display();
    }

    public function lottery() {
      $prize_arr = M('lottery')->select();
      foreach ($prize_arr as $key => $val) {
        $arr[$val['id']] = $val['v'];
      }
      $rid = $this->get_rand($arr); //根据概率获取奖项id
      var_dump($rid);

      $res['yes'] = $prize_arr[$rid-1]['prize']; //中奖项
      var_dump($res['yes']);
      unset($prize_arr[$rid-1]); //将中奖项从数组中剔除，剩下未中奖项
      shuffle($prize_arr); //打乱数组顺序
      for($i=0;$i<count($prize_arr);$i++){
          $pr[] = $prize_arr[$i]['prize'];
      }
      $res['no'] = $pr;
      var_dump($res['no']);

    }

    public function verifyum() {
      $condition['um'] = I('um');

      $result = M('um')->where($condition)->select();
      if($result){
          jsonReturn(0,success, $result);
      }else{
          jsonReturn(1,error,'请输入正确的um号');
      }

    }
    public function get_rand($proArr) {
        $result = '';
        //概率数组的总概率精度
        $proSum = array_sum($proArr);
        //概率数组循环
        foreach ($proArr as $key => $proCur) {
            $randNum = mt_rand(1, $proSum);
            if ($randNum <= $proCur) {
                $result = $key;
                break;
            } else {
                $proSum -= $proCur;
            }
        }
        unset ($proArr);
        return $result;
    }

}
